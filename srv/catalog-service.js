const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
    const { Products, Customers } = this.entities;
    const service = await cds.connect.to('NorthWind');
    this.on('READ', Products, request => {
        return service.tx(request).run(request.query);
    });
    this.on('READ', Customers, request => {
        return service.tx(request).run(request.query);
    });
    this.on("READ", "SalesOrders", async req => {
        try {
            const service = await cds.connect.to('so_capsrv');
            let result = await service.tx(req).run(req.query);
            return result;
        } catch (error) {
            req.error("500", error.message);
        }
    });
});