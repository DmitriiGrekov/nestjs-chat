import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { CreateUserDto } from '../src/core/dto/users/createUser.dto';
import { UpdateUserDto } from 'src/core/dto/users/updateUser.dto';

const testUserDto: CreateUserDto = {
  firstname: 'Тестовый Дмитрий',
  lastname: 'Тестовый Греков',
  patroname: 'Тестовый Викторович',
};

const updateUserDto: UpdateUserDto = {
  firstname: 'Тестовый Егор',
  lastname: 'Тестовый Греков',
  patroname: 'Тестовый Викторович',
};

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let createdId: number;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (POST)', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send(testUserDto)
      .expect(201)
      .then(({ body }: request.Response) => {
        createdId = body.id;
        expect(createdId).toBeDefined();
        expect(body.firstname).toEqual(testUserDto.firstname);
      });
  });

  it('users/list (GET)', () => {
    return request(app.getHttpServer()).get('/users/list').expect(200);
  });

  it(`users/${createdId} (GET)`, () => {
    return request(app.getHttpServer())
      .get(`/users/${createdId}`)
      .expect(200)
      .then(({ body }: request.Response) => {
        expect(body.id).toEqual(createdId);
      });
  });
});
