import Web3 from  'web3';


//window.ethereum.enable();

let web3;


if(typeof window !== 'undefined'  && typeof window.web3 !== 'undefined'){
// window.web3 coming from metamask
//we are on browser and metamask is running
//const currProvider = window.web3.currentProvider
web3 = new Web3(window.web3.currentProvider);
//console.log('currProvider ');
//console.log(currProvider);
}else{


    //we  are on server  or  the user is not running metamask
    //we are creating our own provider
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/2e759be8994046c6ac8fcbe80e818e11'
    );
    web3 = new  Web3(provider);
}




export default web3;

