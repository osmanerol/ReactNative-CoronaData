import { observable, action, configure, runInAction } from 'mobx';
import axios from 'axios';

import { API_TOTAL } from '../constants/ConstantTotal';

configure({
    enforceActions:'observed'
})

class AllData{
    @observable totalDeaths=null;
    @observable totalCases=null;
    @observable totalRecovered=null;
    @observable loading=false;

    @action async getData(){
        this.loading=true;
        try{
            const {data:{result}}=await axios.get(`${API_TOTAL}`,{
                headers:{
                    authorization: 'authorization: apikey your_token',
                    'Content-Type': 'application/json'
                }
            })
            runInAction(()=>{
                this.totalDeaths=result.totalDeaths,
                this.totalCases=result.totalCases,
                this.totalRecovered=result.totalRecovered,
                this.loading=false
            })
        } catch(error){
            this.loading=false;
            alert('Bir şeyler hatalı.');
        }
    }
}

export default new AllData();