// Nomenclatura de variáveis

// list to usersList
const usersList = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getData(req, res) {
  // github to githubUsername
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const response = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (response.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  // data to githubProfile
  const githubProfile = await response.json()

  // orferList to followersList
  const followersList = usersList.sort((a, b) =>  b.followers - a.followers); 

  // category to categoryFollowers
  const categoryFollowers = followersList.find(i => githubProfile.followers > i.followers)

  // result to githubProfileResult
  const githubProfileResult = {
    githubUsername,
    category: categoryFollowers.title
  }

  return githubProfileResult
}

getData({ query: {
  username: 'josepholiveira'
}}, {})