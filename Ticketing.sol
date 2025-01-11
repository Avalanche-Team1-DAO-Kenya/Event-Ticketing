// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Ticketing is ERC721 {
    uint256 public nextTicketId;
    mapping(uint256 => string) public ticketDetails;

    constructor() ERC721("EventTicket", "ETK") {}

    function mintTicket(string memory eventName, string memory seat, uint256 eventDate) external {
        uint256 ticketId = nextTicketId;
        _mint(msg.sender, ticketId);
        ticketDetails[ticketId] = string(abi.encodePacked(eventName, ", Seat: ", seat, ", Date: ", eventDate));
        nextTicketId++;
    }

    function getTicketDetails(uint256 ticketId) external view returns (string memory) {
        return ticketDetails[ticketId];
    }
}
