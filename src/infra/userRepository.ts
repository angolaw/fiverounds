class StudentRepository {
async function create(studentData) {
    const student = new StudentModel(studentData)
    await student.save()
    return new StudentRepository(student.toObject())
}
async function getById(studentId: string) {
    const student = await StudentModel.findById(studentId)
    return new Student(student.toObject())

}
async function update(studentId, studentData) {
    const student = await StudentModel.findByIdAndUpdate(studentId, studentData, { new: true })
    return new Student(Student.toObject())

}
async function delete (studentId) {
    await StudentModel.findByIdAndDelete(studentId)

}
async function getAll() {
    const Students = await StudentModel.find()
    return Students.map(_ => new Student(_.toObject()))
}
}