import knex from "knex";
import Student from "../domain/student";

class StudentRepository {
    async create(studentData: Student) {
        const  [id] = await knex('students').insert(studentData)
        return new Student({id, ...studentData})

    }
    async getById(studentId: string){
        const student = await knex('students').where({id: studentId}).first()
        return student ? new Student(student) : null
    }
    async update(studentId: string, studentData:Student){
        await knex('students').where({id: studentId}).update(studentData)
        const updatedStudent = await this.getById(studentId)
        return updatedStudent 
    }
    async delete(studentId: string){
        await knex('students').where({id: studentId}).delete()

    }
    async getAll(){
        const students = await knex('student').select()
        return students.map(student => new Student(student))
    }
    

}
module.exports = StudentRepository

