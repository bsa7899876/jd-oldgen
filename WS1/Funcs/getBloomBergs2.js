/*
  -- getBloomBergs2
 Shows statistics of the World Dance Floor.
 
 Such as: "Mexico has earned 498 stars this week!", "3899984 stars were earned in total Worldwide!"
  --
*/
const { createServerTime } = require("../Modules/Util");
const Users = require.main.require("./WDF/Users");

module.exports = (req, res, next) => {
  
  // not done!
  
  // placeholder
  let response = {
    country_0: 8521,
    country_num_0: 14,
    country_1: 8399,
    country_num_1: 1,
    country_2: 8438,
    country_num_2: 1,
    country_count: 3,
    stars_week_country_0: 8483,
    stars_week_num_0: 749,
    stars_week_count: 1,
    current_star_count: 9535757,
    week_stars: 8264,
    next_bb: 696377955.82011 // Next bloombergs time (to be requested by the game i think?)
  };
  
  return response;
};