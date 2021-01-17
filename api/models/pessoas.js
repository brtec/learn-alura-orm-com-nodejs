'use strict'
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Você não enviou um e-mail válido'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    paranoid: true,
    defaultScope: {
      where: { ativo: true }
    },
    scopes: {
      todos: { where: {} },
      estudantes: { where: { role: 'estudante' } }
    }
  })
  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Turmas, {
      foreignKey: 'docente_id'
    }) 
    Pessoas.hasMany(models.Matriculas, {
      foreignKey: 'estudante_id'
    })

  }
  return Pessoas
}