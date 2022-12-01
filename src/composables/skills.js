import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

export default function useSkills() {
  const skills = ref([]);
  const skill = ref([]);
  const errors = ref({});
  const router = useRouter();

  const getSkills = async () => {
    if(localStorage.getItem('token')){
        const response = await axios.get("skills",{
            headers:{
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
          });
        skills.value = response.data.data;
    }
    else {
        window.location.href = "/login"
    }
  };

  const getSkill = async (id) => {
    if(localStorage.getItem('token')){
        const response = await axios.get("skills/" + id,{
            headers:{
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
          });
          skill.value = response.data.data;
    }
    else {
        window.location.href = "/login"
    }
  };

  const storeSkill = async (data) => {
    try {
      await axios.post("skills", data);
      await router.push({ name: "SkillIndex" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const updateSkill = async (id) => {
    try {
      await axios.put("skills/" + id, skill.value);
      await router.push({ name: "SkillIndex" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const destroySkill = async (id) => {
    if (!window.confirm("Are You Sure?")) {
      return;
    }
    await axios.delete("skills/" + id);
    await getSkills();
  };

  return {
    skill,
    skills,
    getSkill,
    getSkills,
    storeSkill,
    updateSkill,
    destroySkill,
    errors,
  };
}