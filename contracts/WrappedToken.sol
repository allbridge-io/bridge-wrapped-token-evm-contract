// SPDX-License-Identifier: Apache 2
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract WrappedToken is Context, Ownable, ERC20 {
    uint8 private _decimals;
    bytes4 public source;
    bytes32 public sourceAddress;

    constructor(
        bytes4 source_,
        bytes32 sourceAddress_,
        uint8 decimals_,
        string memory name,
        string memory symbol
    ) ERC20(name, symbol) {
        source = source_;
        sourceAddress = sourceAddress_;
        _decimals = decimals_;
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }

    function mint(address to, uint256 amount) public virtual onlyOwner {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) public virtual onlyOwner {
        _burn(from, amount);
    }
}
