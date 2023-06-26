const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
    const { Products } = this.entities;
    const service = await cds.connect.to('NorthWind');
    this.on('READ', Products, request => {
        return service.tx(request).run(request.query);
    });

    this.on("READ", "Persons", async req => {
        try {
            const service = await cds.connect.to('NorthWind');
            let result = await service.tx(req).run(req.query);
            return result;
        } catch (error) {
            req.error("500", error.message);
        }
    });

    this.on("READ", "SalesOrders", async req => {
        try {
            const service1 = await cds.connect.to('so_capsrv');
            let result = await service1.tx(req).run(req.query);
            return result;
        } catch (error) {
            req.error("500", error.message);
        }
    });  


    this.on('READ', 'Suppliers', async req => {
        const bupa = await cds.connect.to('API_BUSINESS_PARTNER');
        return bupa.run(req.query);
    });

    this.on("INSERT", "SalesOrders", async req => {
        try {
            const service1 = await cds.connect.to('so_capsrv');
            let result = await service1.tx(req).run(req.query);
            return result;
        } catch (error) {
            req.error("500", error.message);
        }
    });  

    this.on("READ", "Categories", async req => {
        try {
            const service = await cds.connect.to('NorthWind');
            let result = await service.tx(req).run(req.query);
            return result;
        } catch (error) {
            req.error("500", error.message);
        }
    });
});