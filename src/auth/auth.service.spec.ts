import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      // imports: [UsersModule, PassportModule],
      providers: [AuthService,
        {
          provide: UsersService,
          useValue: {
            findOne(username: string) {
              return username;
            }
          }
        }
    ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return true', () => {
    expect(service.validateUser('admin', 'password')).toBeTruthy();
  });
  it('should return false', () => {
    expect(service.validateUser('user', 'password')).toBeFalsy();
  });

});
