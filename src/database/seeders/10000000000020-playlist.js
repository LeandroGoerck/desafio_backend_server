module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      'playlist',
      [
        {
          id: 1,
          name: 'Stairway to Heaven Playlist',
          genre: 1,
        },
        {
          id: 2,
          name: 'Rolling in the deep Playlist',
          genre: 2,
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('playlist', null, {});
  },
};
