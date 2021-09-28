import {Axios} from '../axios' ;

export const getModele =()=>{
    var self = this   
Axios.get('Modele')
.then((response)=>{
    self.data = response.data
});
}
