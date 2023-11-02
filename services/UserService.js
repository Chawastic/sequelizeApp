class UserService {
    constructor(db) {
        this.client = db.sequelize;
        this.user = db.users;
    }

    async create(firstName, lastName) {
        return this.user.create(
            {
                firstName: firstName,
                lastName: lastName
            }
        )
    }

    async getAll() {
        return this.user.findAll({
            where: {}
        })
    }

    async changeFirstName(userId, firstName, lastName) {
        return this.user.update({firstName, lastName}, {where: {id: userId}})
    }

    async deleteUser(userId) {
        return this.user.destroy({
            where: {id: userId}
        })
    }
}
module.exports = UserService;