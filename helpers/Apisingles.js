import axios from "axios"
const Nuevaapai  =  async (  url )=>{
        const first = await axios.post(url);
        const secondo  =  await first.data
        return secondo

}

export default Nuevaapai; 