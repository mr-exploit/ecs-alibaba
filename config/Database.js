import { Sequelize } from "sequelize";

const db = new Sequelize('upload_db', 'admin_db', 'Kambing1211', {
    host: "c-public.rwlb.ap-southeast-5.rds.aliyuncs.com",
    port: 3306,
    dialect: "mysql"
});

export default db;
