import { Brand } from '../models/models.js';
import ApiError from '../error/ApiError.js';

class BrandController {
    async create(req, res, next) {
        const { name } = req.body;
        const checkName = await Brand.findOne({
            where: { name },
        });

        if (checkName) {
            return next(ApiError.badRequest('Такой бренд уже существует'));
        }

        const brand = await Brand.create({ name });
        return res.json(brand);
    }

    async update(req, res, next) {
        const { id } = req.params;

        const updatedBrand = await Brand.findOne({
                                            where: { id },
                                        })
                                        .then(async () => {
                                            let brand = await Brand.update(
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
                                            Brand.findOne({
                                                where: { id },
                                            }),
                                        );

        return res.json(updatedBrand);
    }

    async getAll(req, res, next) {
        const brands = await Brand.findAll();
        return res.json(brands);
    }

    async getOne(req, res, next) {
        const { id } = req.params;

        const brand = await Brand.findOne({
            where: { id: id },
        });

        if (!brand) {
            return next(ApiError.badRequest(`Бренд с ID ${ id } не найден`));
        }

        return res.json(brand);
    }

    async removeOne(req, res, next) {
        const { id } = req.params;

        const brand = await Brand.findOne({
            where: { id },
        });

        if (!brand) {
            return next(ApiError.badRequest(`Тип с id ${ id } не найден`));
        }
        brand.destroy();
        return res.json(brand);
    }
}

export default new BrandController();
