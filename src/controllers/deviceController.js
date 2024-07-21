import { Device } from '../models/device.js';
import ApiError from '../error/ApiError.js';

class DeviceController {
    async create(req, res, next) {
        const { name } = req.body;
        const checkName = await Device.findOne({
            where: { name },
        });

        if (checkName) {
            return next(ApiError.badRequest('Такой девайс уже существует'));
        }

        const Device = await Device.create({ name });
        return res.json(Device);
    }

    async update(req, res, next) {
        const { id } = req.params;

        const updatedDevice = await Device.findOne({
                                            where: { id },
                                        })
                                        .then(async () => {
                                            let Device = await Device.update(
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
                                            Device.findOne({
                                                where: { id },
                                            }),
                                        );

        return res.json(updatedDevice);
    }

    async getAll(req, res, next) {
        const devices = await Device.findAll();
        return res.json(devices);
    }

    async getOne(req, res, next) {
        const { id } = req.params;

        const type = await Device.findOne({
            where: { id: id },
        });

        if (!type) {
            return next(ApiError.badRequest(`Девайс с ID ${ id } не найден`));
        }

        return res.json(type);
    }

    async removeOne(req, res, next) {
        const { id } = req.params;

        const device = await Device.findOne({
            where: { id },
        });

        if (!device) {
            return next(ApiError.badRequest(`Девайс с id ${ id } не найден`));
        }
        Device.destroy();
        return res.json(device);
    }
}

export default new DeviceController();
