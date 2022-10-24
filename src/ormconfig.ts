import { ConnectionOptions } from 'typeorm';
export default {
    type: 'mysql',
    host: "127.0.0.1",
    port: 7003,
    username: 'root',
    password: 'password',
    database: 'my_nestjs_project',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
} as ConnectionOptions;
