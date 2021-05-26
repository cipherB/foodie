import React, { useEffect, useState } from 'react';
import Base from '../components/Base';
import {getVendor} from './helper/VendorApiCall';

const Vendors = () => {
    const [vendors, setVendors] = useState([]);
    const [error, setError] = useState(false);

    const loadAllVendor = () => {
        getVendor()
        .then(data => {
            if (data.error) {
                setError(data.error)
                console.log(error)
            } else {
                setVendors(data);
                console.log('data', data)
            }
        });

    };

    
    useEffect(() => {
        loadAllVendor();
        console.log('info', vendors)
    }, [])

    return (
        <div className="container-fluid" >
            <Base title="Vendors" />
            {
                (vendors.map((vendor) => {
                    return (
                        <div className="vendor" >
                            <img src={vendor.image} alt="vendor" className="vendor_img" />
                            <div className="vendor_det">
                                <p className="vendor_name" >{vendor.name} </p>
                                <p className="vendor_loc" >location: {vendor.location} </p>
                                <p className="vendor_desc" >{vendor.description} </p>
                            </div>
                        </div>
                    )
                }))
            }
        </div>
    )
};

export default Vendors;
