export function hasSpecificChildren(children: any, typeName: string) {
  if (children) {
    for (let child in children) {
      if (children[child]?.props?.__TYPE == typeName) {
        return true;
      }
    }
  }
  return false;
}
