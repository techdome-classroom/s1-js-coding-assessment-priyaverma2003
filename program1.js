const getTotalIsles = function (grid) {
  let islandCount=0;
  let rows=grid.length;
  let cols=grid[0].length;
  function dfs(r,c){
    if (r<0 || r>= rows || c<0||cols || grid[r][c] === 'W'){
      return;
    }
  grid [r][c]='W';
  dfs(r-1,c);
  dfs(r+1,c);
  dfs(r,c-1);

  dfs(r,c+1);


  }
  for (let r=0;  r<rows;r++)
{
  for (let c=0; c<cols; c++)
{
  if (grid[r][c]==='')
{
  dfs(r,c);
  islandCount++;
}}}

return islandCount
}; 

module.exports = getTotalIsles;
 let grid1=
 [
  ["L","L","W","W","W"],
  ["L","L","W","W","W"],
  ["W","W","L","W","W"],
  ["W","W","W","L","L"],
];
console.log(getTotalIsles(grid1));

let grid2=

