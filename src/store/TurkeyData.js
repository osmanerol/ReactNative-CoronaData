import { observable, action, configure, runInAction } from 'mobx';
import axios from 'axios';

import { API_COUNTRIES } from '../constants/ConstantCountries';

configure({
    enforceActions:'observed'
})

class TurkeyData{
    @observable totalDeaths=null;
    @observable totalCases=null;
    @observable totalRecovered=null;
    @observable loading=false;

    @action async getData(){
        this.loading=true;
        try{
            const {data:{result}}=await axios.get(`${API_COUNTRIES}?country=Turkey`,{
                headers:{
                    authorization: 'apikey 0Q3J6uQUE9T9m3bS01EZMO:2XjGPcSDXXOKerv2ouoRgO',
                    'Content-Type': 'application/json'
                }
            })
            runInAction(()=>{
                this.totalDeaths=result[0].totalDeaths,
                this.totalCases=result[0].totalCases,
                this.totalRecovered=result[0].totalRecovered
                this.loading=false;
            })
        } catch(error){
            this.loading=false;
            alert('Bir şeyler hatalı.');
        }
    }
}

export default new TurkeyData();