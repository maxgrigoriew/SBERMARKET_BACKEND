import { Type } from '../models/models.js';
import ApiError from '../error/ApiError.js';

class TypeController {
    async create(req, res, next) {
        const { name } = req.body;
        const checkName = await Type.findOne({
            where: { name },
        });

        if (checkName) {
            return next(ApiError.badRequest('Такой тип уже существует'));
        }

        const Type = await Type.create({ name });
        return res.json(Type);
    }

    async update(req, res, next) {
        const { id } = req.params;

        const updatedType = await Type.findOne({
                                            where: { id },
                                        })
                                        .then(async () => {
                                            let Type = await Type.update(
                                                {
                                                    name: req.body.name,
                                                },
                                                {
                                                    where: {
                                                        id,
                                                    },
                                                },
                                            );
                                        })
                                        .then(() =>
                                            Type.findOne({
                                                where: { id },
                                            }),
                                        );

        return res.json(updatedType);
    }

    async getAll(req, res, next) {
        const types = await Type.findAll();
        return res.json(types);
    }

    async getOne(req, res, next) {
        const { id } = req.params;

        const type = await Type.findOne({
            where: { id: id },
        });

        if (!type) {
            return next(ApiError.badRequest(`Тип с ID ${ id } не найден`));
        }

        return res.json(type);
    }

    async removeOne(req, res, next) {
        const { id } = req.params;

        const Type = await Type.findOne({
            where: { id },
        });

        if (!Type) {
            return next(ApiError.badRequest(`Тип с id ${ id } не найден`));
        }
        Type.destroy();
        return res.json(Type);
    }
}

export default new TypeController();
