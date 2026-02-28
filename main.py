from dotenv import load_dotenv
from pydantic import BaseModel
from langchain_anthropic import ChatAnthropic
from langchain_core.output_parsers import PydanticOutputParser
from langchain.agents import create_agent

load_dotenv()

class Responsetemplate(BaseModel):
    restatequestion: str
    explanation: str
    solution: str
    identifymistakes: str
    understandingcheck: str

llm=ChatAnthropic(
    model="claude-sonnet-4-5-20250929")

parser = PydanticOutputParser(pydantic_object=Responsetemplate)
system_prompt = (
    "You are a patient expert tutor for any subject.\n"
    "For every response, answer the user query and use necessary tools.\n"
    "Wrap the output in this format and provide no other text:\n"
    f"{parser.get_format_instructions()}"
)

agent = create_agent(model=llm, tools=[], system_prompt=system_prompt)

result = agent.invoke()

