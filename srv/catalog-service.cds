using {NorthWind as external} from './external/NorthWind.csn';
using {so_capsrv as so_extsrv} from './external/so_capsrv';

service CatalogService {

    @readonly
    entity Products    as projection on external.Products {
        key ID,
            Name,
            Description,
            ReleaseDate,
            DiscontinuedDate,
            Rating,
            Price
    };

    entity Customers   as projection on external.Customer;

    @readonly
    entity SalesOrders as projection on so_extsrv.SalesOrders;
}
