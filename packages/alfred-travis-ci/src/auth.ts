import alfy from 'alfy'

const main = () => {
  alfy.config.set('token', alfy.input)

  alfy.output([
    {
      title: 'Token saved !',
      subtitle: "You can now use the commande 'travis-update' to fetch your repositories",
    },
  ])
}

main()
