from semantic import semantic_analysis

RESUME = """Built REST APIs using Python and FastAPI.
Worked with MySQL databases and wrote SQL queries.
Used Git and GitHub for version control."""

GOOD_JD = """Experience building REST APIs with Python.
Good knowledge of SQL and relational databases.
Familiarity with Git and GitHub."""

BAD_JD = """Experience managing restaurant staff and inventory.
Strong customer service and cooking skills.
Ability to work evening shifts in a busy kitchen."""


def test_related_scores_higher_than_unrelated():
    good = semantic_analysis(RESUME, GOOD_JD)
    bad = semantic_analysis(RESUME, BAD_JD)
    print("good:", good["semantic_similarity_score"], "bad:", bad["semantic_similarity_score"])
    assert good["semantic_similarity_score"] > bad["semantic_similarity_score"]


def test_same_input_gives_same_output():
    a = semantic_analysis(RESUME, GOOD_JD)
    b = semantic_analysis(RESUME, GOOD_JD)
    assert a == b  # deterministic, unlike the LLM


def test_empty_input_does_not_crash():
    assert semantic_analysis("", GOOD_JD)["semantic_similarity_score"] == 0.0