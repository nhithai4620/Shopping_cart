use shopping_cart;

create table product(
	pd_id int not null primary key,
    pd_name varchar(30),
    pd_src varchar(100),
    pd_content varchar(200)	
);

create table customer(
	ctm_id int not null primary key,
    ctm_name varchar(30),
    ctm_phone varchar(12),
    ctm_sex varchar(10)
);

create table bill (
	b_id int not null primary key,
    b_customerid int ,
    b_date datetime,
    FOREIGN KEY (b_customerid) REFERENCES customer(ctm_id)
);

create table bill_details(
	bd_billid int not null,
    bd_productid int not null,
    bd_count int,
    bd_price float,
    bd_total float,
    FOREIGN KEY (bd_billid) REFERENCES bill(b_id),
    FOREIGN KEY (bd_productid) REFERENCES product(pd_id),
    PRIMARY KEY (bd_billid,bd_productid)
);

