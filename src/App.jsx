import CARD from "./CARD"

function App() {
 const data=[
  {
    plane:"FREE",
    price:"0",
    user:"singale User",
    userEnbler:true,
    Storage:"5GB storage",
    StorageEnbler:true,
    publicproject:"unlimited public project",
    publicprojectEnbler:true,
    community:"community access",
    communityEnbler:true,
    priviteproject:"unlimited privite project",
    priviteprojectEnbler:false,
    suport:"Dedicated Phone Support",
    supportEnbler:false,
   Subdomain:"Free Subdomain",
   SubdomainEnbler:false,
    Reports:"Monthly Status Reports",
    ReportsEnbler:false
  },{
    plane:"PLES",
    price:"9",
    user:"5 User",
    userEnbler:true,
    Storage:"50GB storage",
    StorageEnbler:true,
    publicproject:"unlimited public project",
    publicprojectEnbler:true,
    community:"community access",
    communityEnbler:true,
    priviteproject:"unlimited privite project",
    priviteprojectEnbler:true,
    suport:"Dedicated Phone Support",
    supportEnbler:true,
   Subdomain:"Free Subdomain",
   SubdomainEnbler:true,
    Reports:"Monthly Status Reports",
    ReportsEnbler:false
  },{
    plane:"PRO",
    price:"49",
    user:"unlimited User",
    userEnbler:true,
    Storage:"150GB storage",
    StorageEnbler:true,
    publicproject:"unlimited public project",
    publicprojectEnbler:true,
    community:"community Access",
    communityEnbler:true,
    priviteproject:"unlimited privite project",
    priviteprojectEnbler:true,
    suport:"Dedicated Phone Support",
    supportEnbler:true,
   Subdomain:"unlimited Free Subdomain",
   SubdomainEnbler:true,
    Reports:"Monthly Status Reports",
    ReportsEnbler:true
  }
 ]

 

  return (
    <>
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
        data.map((e,i)=>{
          return  <CARD data = {e} key = {i}/>
        
              
    })
      }
     
      </div>
  </div>
</section>
    </>
  )
}

export default App
