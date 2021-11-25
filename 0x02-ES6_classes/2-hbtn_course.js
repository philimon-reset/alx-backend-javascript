export default class HolbertonCourse {
  constructor(name, length, students = []) {
    if (typeof (name) === String) this._name = name;
    if (length === parseInt(length, 10)) this._length = length;
    if (typeof (students) === Array) this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = students;
  }
}
