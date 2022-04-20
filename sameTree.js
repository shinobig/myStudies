function isSameTree(p, q){

  if (p === null && q === null) return true;

  if (p !== null && q !== null)
    return (
      p.val === q.val &&
      isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right)
    );

  return false;

}
