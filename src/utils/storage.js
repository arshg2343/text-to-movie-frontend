export const savePrompt = (prompt) => {
  const prompts = getPrompts()
  prompts.unshift({ id: Date.now(), text: prompt })
  localStorage.setItem("moviePrompts", JSON.stringify(prompts.slice(0, 10))) // Keep last 10
}

export const getPrompts = () => {
  const prompts = localStorage.getItem("moviePrompts")
  return prompts ? JSON.parse(prompts) : []
}

