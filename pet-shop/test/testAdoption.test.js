const Adoption = artifacts.require("Adoption");

contract("Adoption", (accounts)=>{
    let adoption;
    let expectedAdopter;

    before(async () => {
        adoption = await Adoption.deployed()
    })

    describe("adotando um pet para voce", async () =>{
        before("adotando um pet usando accounts[0]", async() =>{
            await adoption.adopt(8, {from:accounts[0]})
            expectedAdopter = accounts[0]
        })
        it("can fetch thes addres of an owner by pet id", async () => {
            const adopter = await adoption.adopters(8);
            assert.equal(adopter, expectedAdopter, "Thisowner of the adopted pet should be the first account")
        })
        it("can fetch the collection of all pet owners addresses", async () => {
            const adopters = await adoption.getAdopters();
            assert.equal(adopters[8], expectedAdopter, "The owner should be the first")
        })
    })
});