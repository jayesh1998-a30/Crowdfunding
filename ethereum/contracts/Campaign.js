var interface = "[{\"constant\":false,\"inputs\":[{\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"finalizeRequest\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"approvers\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getRequestsCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getSummary\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"manager\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"requests\",\"outputs\":[{\"name\":\"description\",\"type\":\"string\"},{\"name\":\"value\",\"type\":\"uint256\"},{\"name\":\"recipient\",\"type\":\"address\"},{\"name\":\"complete\",\"type\":\"bool\"},{\"name\":\"approvalCount\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"approversCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"description\",\"type\":\"string\"},{\"name\":\"value\",\"type\":\"uint256\"},{\"name\":\"recipient\",\"type\":\"address\"}],\"name\":\"createRequest\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"minimumContribution\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"contribute\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"approveRequest\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"minimum\",\"type\":\"uint256\"},{\"name\":\"creator\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}]"







var bytecode ="6060604052341561000f57600080fd5b6040516040806108b6833981016040528080519190602001805160018054600160a060020a031916600160a060020a039290921691909117905550506002556108598061005d6000396000f3006060604052600436106100ae5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630344100681146100b35780630a144391146100cb5780633410452a146100fe5780634051ddac14610123578063481c6a751461016f57806381d12c581461019e57806382fde093146102655780638a9cfd5514610278578063937e09b1146102d9578063d7bb99ba146102ec578063d7d1bbdb146102f4575b600080fd5b34156100be57600080fd5b6100c960043561030a565b005b34156100d657600080fd5b6100ea600160a060020a03600435166103e4565b604051901515815260200160405180910390f35b341561010957600080fd5b6101116103f9565b60405190815260200160405180910390f35b341561012e57600080fd5b610136610400565b60405194855260208501939093526040808501929092526060840152600160a060020a03909116608083015260a0909101905180910390f35b341561017a57600080fd5b61018261041f565b604051600160a060020a03909116815260200160405180910390f35b34156101a957600080fd5b6101b460043561042e565b60405160208101859052600160a060020a038416604082015282151560608201526080810182905260a0808252865460026000196101006001841615020190911604908201819052819060c0820190889080156102525780601f1061022757610100808354040283529160200191610252565b820191906000526020600020905b81548152906001019060200180831161023557829003601f168201915b5050965050505050505060405180910390f35b341561027057600080fd5b610111610479565b341561028357600080fd5b6100c960046024813581810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437509496505084359460200135600160a060020a0316935061047f92505050565b34156102e457600080fd5b610111610597565b6100c961059d565b34156102ff57600080fd5b6100c96004356105dc565b60015460009033600160a060020a0390811691161461032857600080fd5b600080548390811061033657fe5b90600052602060002090600502019050600260045481151561035457fe5b04816003015411151561036657600080fd5b600281015460a060020a900460ff161561037f57600080fd5b60028101546001820154600160a060020a039091169080156108fc0290604051600060405180830381858888f1935050505015156103bc57600080fd5b600201805474ff0000000000000000000000000000000000000000191660a060020a17905550565b60036020526000908152604090205460ff1681565b6000545b90565b6002546000546004546001549293600160a060020a0330811631941690565b600154600160a060020a031681565b600080548290811061043c57fe5b600091825260209091206005909102016001810154600282015460038301549293509091600160a060020a0382169160a060020a900460ff169085565b60045481565b610487610684565b60015433600160a060020a039081169116146104a257600080fd5b60a06040519081016040528085815260200184815260200183600160a060020a0316815260200160001515815260200160008152509050600080548060010182816104ed91906106ba565b600092835260209092208391600502018151819080516105119291602001906106eb565b5060208201518160010155604082015160028201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055606082015160028201805491151560a060020a0274ff0000000000000000000000000000000000000000199092169190911790556080820151816003015550505050505050565b60025481565b60025434116105ab57600080fd5b600160a060020a0333166000908152600360205260409020805460ff19166001908117909155600480549091019055565b600080828154811015156105ec57fe5b60009182526020808320600160a060020a033316845260039091526040909220546005909102909101915060ff16151561062557600080fd5b600160a060020a033316600090815260048201602052604090205460ff161561064d57600080fd5b600160a060020a03331660009081526004820160205260409020805460ff1916600190811790915560039091018054909101905550565b60a060405190810160405280610698610769565b8152600060208201819052604082018190526060820181905260809091015290565b8154818355818115116106e6576005028160050283600052602060002091820191016106e6919061077b565b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061072c57805160ff1916838001178555610759565b82800160010185558215610759579182015b8281111561075957825182559160200191906001019061073e565b506107659291506107cc565b5090565b60206040519081016040526000815290565b6103fd91905b8082111561076557600061079582826107e6565b5060006001820181905560028201805474ffffffffffffffffffffffffffffffffffffffffff191690556003820155600501610781565b6103fd91905b8082111561076557600081556001016107d2565b50805460018160011615610100020316600290046000825580601f1061080c575061082a565b601f01602090049060005260206000209081019061082a91906107cc565b505600a165627a7a72305820b5f8042c5878a6ea675bb978bdef0aea5f5c383a6a33a953cbf502914ae258fd0029"