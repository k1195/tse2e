import { Sequelize } from 'sequelize';
const sequelize = new Sequelize(process.env.CONNECTIONQUERY || '')

try {
    sequelize.authenticate()
    console.log("Connection established to PG")
} catch (error) {
    console.log("Connection failed to PG")
}

export default sequelize
