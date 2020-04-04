import { observable, action, configure, runInAction } from 'mobx';
import axios from 'axios';

import { API_COUNTRIES } from '../constants/ConstantCountries';

configure({
    enforceActions:'observed'
})

class CountriesData{
    @observable countries=[];
    @observable loading=false;

    @action async getData(){
        this.loading=true;
        try{
            const {data:{result}}=await axios.get(`${API_COUNTRIES}`,{
                headers:{
                    authorization: 'apikey 0Q3J6uQUE9T9m3bS01EZMO:2XjGPcSDXXOKerv2ouoRgO',
                    'Content-Type': 'application/json'
                }
            })
            let i=0;
            result.forEach((country)=>{
                this.countries[i]=country;
                i++;
            })
            console.log(result[7]);
            return this.countries;
        } catch(error){
            this.loading=false;
            alert('Bir şeyler hatalı.');
        }
    }
}

export default new CountriesData();