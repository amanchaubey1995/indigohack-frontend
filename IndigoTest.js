import React, {useState} from 'react';
import {DataTable} from "react";
import {Column} from "react";



function IndigoTest () {

    const [state, setState]= useState({
date:date,
        fromLocation:fromLocation,
        toLocation:toLocation,
        departureData:departureData,
        returnTrip: returnTrip,
        noOfPassanger:noOfPassanger,
        currencytype:currencytype
    });


return
{
<div>
<TextField value={fromLocation}>From</TextField>
<TextField value={toLocation}>TO</TextField>
<TextField value={departureData}>Departure Date</TextField>
<TextField value={returnTrip}> Add Return Trip</TextField>
<TextField value={noOfPassanger}>Passenger & Extra Seat</TextField>
<TextField value={currencytype}>Pay In Crrency</TextField>

<button>Search Flight</button>
</div>



 <div className="card">

            <DataTable value={state} paginator emptyMessage="No list found." >
              <Column selectionMode="multiple" ></Column>
              <Column field="date" header="Date" sortable ></Column>
              <Column field="fromLocation" header="origin" ></Column>
              <Column field="toLocation" header="Destination" sortable ></Column>
              <Column field="departureData" header="Departure On" sortable ></Column>
              <Column field="returnTrip" header="Return On" sortable ></Column>
              <Column field="date" header="Booking On" sortable ></Column>

              <Column headerStyle={{ width: '3rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible', justifyContent: 'center' }}> </Column>
              <Column headerStyle={{ width: '3rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible', justifyContent: 'center' }} ></Column>
            </DataTable>
          </div>
}


}