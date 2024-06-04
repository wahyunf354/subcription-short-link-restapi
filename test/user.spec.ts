import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { TestService } from './test.service';
import { TestModule } from './test.module';

describe('User Controller', () => {
  let app: INestApplication;
  let testService: TestService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, TestModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    testService = app.get(TestService);

    await app.init();
  });

  describe('POST /api/users', () => {
    beforeEach(async () => {
      await testService.deleteUser();
    });

    it('should be rejected if request is invalid', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/users')
        .send({
          first_name: 'test',
          last_name: 'test',
          email: '',
          password: 'password',
        });

      expect(response.status).toBe(400);
    });

    it('should be rejected is email same with other user', async () => {
      await testService.createUser();
      const response = await request(app.getHttpServer())
        .post('/api/users')
        .send({
          first_name: 'test',
          last_name: 'test',
          email: 'test@example.com',
          password: 'password',
        });

      expect(response.status).toBe(400);
      // expect(response.body.message).toBeDefined();
    });

    it('should be success create user', async () => {
      const data = {
        first_name: 'test',
        last_name: 'test',
        email: 'test@example.com',
        password: 'password',
      };

      const response = await request(app.getHttpServer())
        .post('/api/users')
        .send(data);

      expect(response.status).toBe(200);
      expect(response.body.code).toBe(200);
      expect(response.body.data.first_name).toBe(data.first_name);
      expect(response.body.data.last_name).toBe(data.last_name);
      expect(response.body.data.email).toBe(data.email);
    });
  });

  describe('POST /api/users/login', () => {
    beforeEach(async () => {
      await testService.deleteUser();
      await testService.createUser();
    });

    it('Should be reject if invalid request', async function () {
      const data = {
        email: '',
        password: '',
      };

      const response = await request(app.getHttpServer())
        .post('/api/users/login')
        .send(data);

      expect(response.status).toBe(400);
    });

    it('Should be reject if wrong email', async function () {
      const data = {
        email: 'test@sds.com',
        password: 't',
      };

      const response = await request(app.getHttpServer())
        .post('/api/users/login')
        .send(data);

      expect(response.status).toBe(401);
      expect(response.body.code).toBe(401);
      expect(response.body.error).toBe('Email or password wrong');
    });

    it('Should be reject if wrong password', async function () {
      const data = {
        email: 'test@example.com',
        password: 't',
      };

      const response = await request(app.getHttpServer())
        .post('/api/users/login')
        .send(data);

      expect(response.status).toBe(401);
      expect(response.body.code).toBe(401);
      expect(response.body.error).toBe('Email or password wrong');
    });

    it('Should be success login', async function () {
      const data = {
        email: 'test@example.com',
        password: 'test',
      };

      const response = await request(app.getHttpServer())
        .post('/api/users/login')
        .send(data);

      expect(response.status).toBe(200);
      expect(response.body.data.first_name).toBe('test');
      expect(response.body.data.last_name).toBe('test');
      expect(response.body.data.token).toBeDefined();
    });
  });
});
