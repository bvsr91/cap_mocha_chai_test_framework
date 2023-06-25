using {NorthWind as external} from './external/NorthWind.csn';
using {so_capsrv as so_extsrv} from './external/so_capsrv';
using {API_BUSINESS_PARTNER as bupa} from '../srv/external/API_BUSINESS_PARTNER';

service CatalogService  @(requires: 'authenticated-user'){

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

    entity Persons     as projection on external.Persons;    
    entity SalesOrders as projection on so_extsrv.SalesOrders;

    entity Suppliers   as projection on bupa.A_BusinessPartner {
        key BusinessPartner          as ID,
            BusinessPartnerFullName  as fullName,
            BusinessPartnerIsBlocked as isBlocked,
    }
}
