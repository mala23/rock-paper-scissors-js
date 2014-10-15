describe("Player", function() {

	var player;

	it("should have a gesture", function() {
		player = new Player();
		expect(player.gesture()).toBe(true);
	});

});