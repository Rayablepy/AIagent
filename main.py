from dotenv import load_dotenv
from pydantic import BaseModel
from langchain_openai import ChatOpenAI
from langchain_anthropic import ChatAnthropic
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import PydanticOutputParser

load_dotenv()

class Responsetemplate(BaseModel):
    Diagnosis: str
    explanation: str
    solution: str
    check: str

llm=ChatAnthropic(
    model="claude-sonnet-4-5-20250929")

parser = PydanticOutputParser(pydantic_object=Responsetemplate)

prompt = ChatPromptTemplate.from_messages(

    [
        ("system",
         """
            You are a patient expert tutor for any subject.
            For every response:
            1. Restate the question.
            2. Explain the concept clearly (simple language, define terms).
            3. Show step-by-step solution if applicable.
            4. Identify mistakes gently if present.
            5. Ask one check-for-understanding question.
            6. Provide one similar practice problem (with optional hint).
            Be structured, concise, supportive, and clear. every time
         """)
    ]
)

