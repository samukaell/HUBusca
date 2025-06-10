import styled from "styled-components";

const RepoComponent = styled.div`
  background-color: #fff;
  color: #222;
  height: auto;
  min-height: 250px;
  margin-bottom: 20px;
  padding: 25px 30px;
  border-radius: 15px;
  border: 1px solid #e1e4e8;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease;

  &:hover {
    cursor: pointer;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 576px) {
    width: 80%;
  }
  @media (max-width: 575px) {
    width: 95%;
  }

  .title {
    font-size: 1.8rem;
    font-weight: 700;
    color: #0366d6;
    margin-bottom: 8px;
  }

  .description {
    font-size: 1rem;
    color: #586069;
    margin-bottom: 18px;
  }

  .date-box {
    display: flex;
    gap: 25px;
    margin-bottom: 15px;

    .date {
      display: flex;
      align-items: center;
      gap: 6px;

      .text {
        font-weight: 600;
        color: #444d56;
        font-size: 0.9rem;
      }

      .date-info {
        color: #0366d6;
        font-size: 0.9rem;
      }
    }

    @media (max-width: 575px) {
      flex-direction: column;
      gap: 8px;
    }
  }

  .container-lang {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;

    .title-languages {
      font-weight: 600;
      color: #0366d6;
      font-size: 1rem;
      margin-right: 10px;
      white-space: nowrap;
    }

    .languages-box {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 8px;
      padding-bottom: 4px;

      /* scrollbar simples e discreto */
      &::-webkit-scrollbar {
        height: 6px;
      }
      &::-webkit-scrollbar-thumb {
        background: #c0c0c0;
        border-radius: 3px;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
      }

      .language-tag {
        display: inline-block;
        padding: 5px 12px;
        border-radius: 20px;
        font-weight: 600;
        font-size: 0.85rem;
        color: white;
        white-space: nowrap;
        user-select: none;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        transition: background-color 0.3s ease;
      }

      .language-tag:hover {
        filter: brightness(0.85);
      }
    }

    .no-languages {
      color: #999;
      font-style: italic;
      font-size: 0.9rem;
    }
  }

  // Adicione dentro do RepoComponent styled.div { ... }

  .languages-bar {
    display: flex;
    height: 25px;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    margin-top: 8px;
    box-shadow: 0 0 4px rgb(0 0 0 / 0.1);
  }

  .language-segment {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: white;
    font-weight: 600;
    white-space: nowrap;
    padding: 0 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: filter 0.3s ease;
  }

  .language-segment:hover {
    filter: brightness(1.2);
  }

  .language-label {
    pointer-events: none;
  }
`;

export { RepoComponent };
