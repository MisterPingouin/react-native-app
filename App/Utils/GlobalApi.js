import { request, gql } from 'graphql-request'

const MASTER_URL ="https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clutlefi900qw08wa7y9ldqjm/master"

const getSlider=async()=>{
    const query = gql`
    query getSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
      
`
const result = await request(MASTER_URL, query);

return result
}

export default{
    getSlider
}