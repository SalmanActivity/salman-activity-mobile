export default (obj, predicate) =>
    Object.keys(obj)
          .filter(key => predicate(key, obj[key]))
          .reduce((res, key) => ({...res, [key]: obj[key]}), {})
