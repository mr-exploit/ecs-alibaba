import { Sequelize } from "sequelize";
//utk koneksi mysql
const db = new Sequelize('silah', 'admin_db', 'Kambing1211',  {
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    host: "c-public.rwlb.ap-southeast-5.rds.aliyuncs.com",
    port: 3306,
    dialect: "mysql"
});

export default db;