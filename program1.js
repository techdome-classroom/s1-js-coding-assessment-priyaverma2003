const getTotalIsles = function (grid) {
  let islandCount=0;
  let rows=grid.length;
  let cols=grid[0].length;
  function dfs(r,c){
    if (r<0 || r>= rows || c<0||cols || grid[r][c] === 'W'{
      return;
    }
  grid [r][c]='W';
  dfs(r-1,c);
  dfs(r+1,c);
  dfs(r-1,c);




  }



}; 

module.exports = getTotalIsles;