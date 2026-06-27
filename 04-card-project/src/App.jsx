import React from "react";
import Card from "./components/Card"



const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/rbh7pRnJ8Kh25nP02zCkvtQXBainO9_vApWJoGrpQMU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTcv/MzU1Lzc4NC9zbWFs/bC9nb29nbGUtbG9n/by1vbi10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kLWZyZWUtcG5n/LnBuZw",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/Q6Fu_YCzAZm6tL-KWaMCrRVfSY-2BeHM6NH6wnjt0-w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNTg2/NTY1MS5qcGc",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/4ykP88PTzplOUikqQi2Mx-nDGQQMXyBnNMroCCnApiE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg5Lzg3/LzBiLzg5ODcwYjRh/ZWY4Njc1ZjQ3N2Fi/NjI4YTdlOGU5ZWQy/LmpwZw",
    companyName: "Apple",
    datePosted: "5 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$78/hr",
    location: "Cupertino, USA",
  },
  {
    brandLogo: "https://imgs.search.brave.com/KX9lQYmGMvZRZeOxgq3gz-84WBhU3PzszozkeMODMNo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTUv/MjEwLzg5MC9zbWFs/bC9tZXRhLWxvZ28t/c3F1YXJlLXJvdW5k/ZWQtbWV0YS1sb2dv/LW1ldGEtbG9nby1m/cmVlLWRvd25sb2Fk/LWZyZWUtcG5nLnBu/Zw",
    companyName: "Meta",
    datePosted: "3 weeks ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "London, UK",
  },
  {
    brandLogo: "https://imgs.search.brave.com/sHRT1m34TXNZG3NSmP39w9j1s9HlDCxXLGxZ-K4sFZs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWFtYXpvbi1sb2dv/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy00/NDk3ODE2LnBuZz9m/PXdlYnAmdz0xMjg",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/4e6Fdwnajr2GvciHYC1WZ9TGozTDRypB0ietqT2ha7w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDIv/MTY1Lzc5NC9zbWFs/bC9uZXRmbGl4LWxv/Z28tdHJhbnNwYXJl/bnQtYmFja2dyb3Vu/ZC1mcmVlLXBuZy5w/bmc",
    companyName: "Netflix",
    datePosted: "2 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Los Angeles, USA",
  },
  {
    brandLogo: "https://imgs.search.brave.com/fFqzpW5c0AIM_jY_3m9P8oMgndToKho7VIwW32MfFwU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci8yMTcv/NDY4L0hELXdhbGxw/YXBlci1udmlkaWEt/YnJhbmQtbG9nby1u/dmlkaWEtbG9nby10/aHVtYm5haWwuanBn",
    companyName: "NVIDIA",
    datePosted: "4 days ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$88/hr",
    location: "Santa Clara, USA",
  },
];
console.log(jobOpenings);


  return (
    <div className="parent">
    {jobOpenings.map(function(elem){
      return <Card company = {elem.companyName}
       brand = {elem.brandLogo}
       date = {elem.datePosted}
       level = {elem.post}
       t1 = {elem.tag1}
       t2 = {elem.tag2} 
       sallary = {elem.pay}
       place = {elem.location}/>
       
     })};
   </div>
  );
};

export default App;