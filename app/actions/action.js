class Action {
    static buildKeyValue(Klass, element) {
      const protocol = new Klass(element);

      if (typeof protocol.primaryKey !== "undefined") {
        return { [protocol.primaryKey]: protocol.toJsonView() };
      }

      return {};
    }
  
    static buildKeyValueList(Klass, elements = []) {
      let keyValueList = {};

      elements.map(
        element =>
          (keyValueList = {
            ...keyValueList,
            ...this.buildKeyValue(Klass, element)
          })
      );
        
      return keyValueList;
    }
}
  
export default Action;