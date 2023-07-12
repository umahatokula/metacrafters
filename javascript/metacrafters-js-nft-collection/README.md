# NFT Manager

This JavaScript code manages Non-Fungible Tokens (NFTs) using functions to mint NFTs, list their metadata, and display the total supply of NFTs created.

## How to Use

1. Create a variable to hold your NFTs by declaring an array called `NFTs`.

2. Use the `mintNFT` function to create NFT objects and store them in the `NFTs` array. The `mintNFT` function takes four parameters: `_name` (name of the NFT), `_rarity` (rarity level of the NFT), `_serialNumber` (serial number of the NFT), and `_isLocked` (whether the NFT is locked or not). Example usage:

   ```javascript
   mintNFT('Vortex X-7', 'Common', 12345, true);
   ```

3. Use the `listNFTs` function to print the metadata of all the NFTs in the `NFTs` array to the console. Example usage:

   ```javascript
   listNFTs();
   ```

4. Use the `getTotalSupply` function to display the total number of NFTs created in the `NFTs` array. Example usage:

   ```javascript
   getTotalSupply();
   ```

## Example

```javascript
// Create a variable to hold your NFTs
const NFTs = [];

// Mint NFTs
mintNFT('Vortex X-7', 'Common', 12345, true);
mintNFT('Thunderbolt Magnum', 'Rare', 23456, false);
mintNFT('Omega Cannon', 'Legendary', 34567, false);
mintNFT('Eclipse Duskblade', 'Epic', 45678, true);
mintNFT('Venomous Eclipse', 'Legendary', 56789, false);

// List NFTs
listNFTs();

// Get total supply
getTotalSupply();
```

## Output

```
Name: Vortex X-7
Rarity: Common
Serial Number: 12345
Is Locked: true
+++++++++++++++++++++++++++++++++++
Name: Thunderbolt Magnum
Rarity: Rare
Serial Number: 23456
Is Locked: false
+++++++++++++++++++++++++++++++++++
Name: Omega Cannon
Rarity: Legendary
Serial Number: 34567
Is Locked: false
+++++++++++++++++++++++++++++++++++
Name: Eclipse Duskblade
Rarity: Epic
Serial Number: 45678
Is Locked: true
+++++++++++++++++++++++++++++++++++
Name: Venomous Eclipse
Rarity: Legendary
Serial Number: 56789
Is Locked: false
+++++++++++++++++++++++++++++++++++
TOTAL SUPPLY: 5
```

This code allows you to create and manage NFTs by storing their metadata, listing the NFTs' details, and retrieving the total supply.